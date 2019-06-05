/* eslint-disable no-restricted-globals */
import { useEffect, useMemo, useRef, useReducer } from 'react';
import scrollama from 'scrollama';
import 'intersection-observer';
import styles from './Scrollama.module.scss';

const STEP_ENTER = 'step-enter';
const STEP_PROGRESS = 'step-progress';
const STEP_EXIT = 'step-exit';

const initialState = {
  index: null,
  progress: null,
  rect: null,
  index_: null,
  progress_: null,
  rect_: null,
  stage: null,
};

function reducer(state, action) {
  const { type, payload, indexToStage, stageProgress } = action;
  switch (type) {
    case STEP_ENTER: {
      const { element, index, direction } = payload;
      const progress = direction === 'down' ? 0 : 1;
      const elRect = element.getBoundingClientRect();
      const top = elRect.top + document.documentElement.scrollTop || document.body.scrollTop;
      const left = elRect.left + document.documentElement.scrollLeft || document.body.scrollLeft;
      const rect = {
        width: elRect.width,
        height: elRect.height,
        top,
        left,
        right: left + elRect.width,
        bottom: top + elRect.height,
      };
      const [stage, stageIndex] = indexToStage(index);
      return {
        ...state,
        index,
        progress,
        rect,
        index_: index,
        progress_: progress,
        rect_: rect,
        stage,
        stageProgress: stageProgress(index, stageIndex, progress),
      };
    }
    case STEP_PROGRESS: {
      const { index, progress } = payload;
      const [stage, stageIndex] = indexToStage(index);
      return {
        ...state,
        index,
        progress,
        index_: index,
        progress_: progress,
        stage,
        stageProgress: stageProgress(index, stageIndex, progress),
      };
    }
    case STEP_EXIT: {
      return { ...state, index: null, rect: null, progress: null };
    }
    default:
      return state;
  }
}

const DEFAULT_OFFSET = 0.5;

function useScrollama(props) {
  const step = useMemo(() => props.step || '', [props.step || '']);

  const offset = useMemo(() => {
    const value = Number(props.offset);
    return isNaN(value) ? DEFAULT_OFFSET : value;
  }, [props.offset || '']);

  const progress = !!props.progress;

  const demo = !!props.demo;

  const [state, dispatch] = useReducer(reducer, initialState);

  // show guideline
  useEffect(() => {
    if (demo) {
      const guide = document.createElement('div');
      document.body.appendChild(guide);
      guide.classList.add(styles.guide);
      guide.innerText = `"${step}" trigger: ${offset}`;
      guide.style.top = `${offset * 100}%`;
      return () => {
        document.body.removeChild(guide);
      };
    }
    return () => null;
  }, [step, offset, demo]);

  const stages = useRef([]);
  const stageMap = useRef({});

  // const getPayload = useMemo(() => {
  //   return (payload) => {
  //     // console.log(steps.current);
  //     // console.log(payload);
  //     const { index } = payload;
  //     if (stageMap.current[index] === undefined) {
  //       stageMap.current[index] = stages.current.slice(0, index + 1)
  //       .filter(e => e).pop() || null;
  //     }
  //     const stage = stageMap.current[index];

  //       // console.log(index, indexToStage.current[index]);
  //     return { ...payload, stage };

  //   }
  // }, [])

  useEffect(() => {
    if (step && document.body.querySelectorAll(step).length > 0) {
      stages.current = Array.from(document.body.querySelectorAll(step)).map((e) => {
        return e.getAttribute('data-stage');
      });
      // console.
      stageMap.current = {};

      const stages2 = Array.from(document.body.querySelectorAll(step)).map((e) => e.getAttribute('data-stage'));

      // console.log(stages2);
      const indexToStage = (() => {
        const cache = {};
        return (index) => {
          if (cache[index] === undefined) {
            const stage =
              stages2
                .slice(0, index + 1)
                .filter((e) => e)
                .pop() || null;
            cache[index] = [stage, stages2.indexOf(stage)];
          }
          return cache[index];
        };
      })();

      const stageProgress = (index, stageIndex, progress) => {
        if (index === stageIndex) {
          return progress;
        }
        return index < stageIndex ? 0 : 1;
      };

      // const indexToStageProgress = (() => {
      //   const cache = {};
      //   return (index) => {
      //     if (cache[index] === undefined) {
      //       cache[index] =
      //         stages2
      //           .slice(0, index + 1)
      //           .filter((e) => e)
      //           .pop() || null;
      //     }
      //     return cache[index];
      //   };
      // })();

      // console.log(stages.current);
      const scroller = scrollama();
      scroller
        .setup({ step, offset, progress })
        .onStepEnter((payload) => dispatch({ type: STEP_ENTER, payload, indexToStage, stageProgress }))
        .onStepProgress((payload) =>
          dispatch({
            type: STEP_PROGRESS,
            payload,
            indexToStage,
            stageProgress,
          }),
        )
        .onStepExit((payload) => dispatch({ type: STEP_EXIT, payload, indexToStage, stageProgress }));
      window.addEventListener('resize', scroller.resize);
      return () => {
        window.removeEventListener('resize', scroller.resize);
        scroller.destroy();
      };
    }
    return () => null;
  }, [step, offset, progress]);

  return state;
}

export default useScrollama;