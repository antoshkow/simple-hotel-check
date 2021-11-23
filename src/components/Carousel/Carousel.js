import React, {
  useState, useEffect, useRef
} from 'react';
import img from '../../images/test-picture.png';
import img2 from '../../images/test-picture2.png';
import img3 from '../../images/test-picture3.png';
import './Carousel.scss';

const Carousel = () => {

  const [state, setState] = useState({
    isScrolling: false,
    cientX: 0,
    scrollX: 0
  });

  const ref = useRef();

  const onMouseDown = evt => {
    if (ref && ref.current && !ref.current.contains(evt.target)) {
      return;
    }
    evt.preventDefault();
    setState({
      ...state,
      isScrolling: true,
      clientX: evt.clientX
    });
  }

  const onMouseUp = evt => {
    if (ref && ref.current && !ref.current.contains(evt.target)) {
      return;
    }
    evt.preventDefault();
    setState({
      ...state,
      isScrolling: false
    });
  }

  const onMouseMove = evt => {
    if (ref && ref.current && !ref.current.contains(evt.target)) {
      return;
    }
    evt.preventDefault();

    const { clientX, scrollX, isScrolling } = state;

    if (isScrolling) {
      ref.current.scrollLeft = scrollX + evt.clientX - clientX;
      setState({
        ...state,
        scrollX: scrollX + evt.clientX - clientX,
        clientX: evt.clientX
      });
    }
  }

  useEffect(() => {
    const el = ref.current;
    if (el) {
      const onWheel = evt => {
        evt.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + evt.deltaY * 4,
          behavior: 'smooth'
        });
      }
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  });

  return (
    <div
      className="carousel"
    >
      <ul
        className="carousel__img-list"
        ref={ref}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <li className="carousel__img"><img src={img} alt="Изображение отеля" /></li>
        <li className="carousel__img"><img src={img2} alt="Изображение отеля" /></li>
        <li className="carousel__img"><img src={img3} alt="Изображение отеля" /></li>
        <li className="carousel__img"><img src={img} alt="Изображение отеля" /></li>
        <li className="carousel__img"><img src={img2} alt="Изображение отеля" /></li>
        <li className="carousel__img"><img src={img3} alt="Изображение отеля" /></li>
        <li className="carousel__img"><img src={img} alt="Изображение отеля" /></li>
        <li className="carousel__img"><img src={img2} alt="Изображение отеля" /></li>
        <li className="carousel__img"><img src={img3} alt="Изображение отеля" /></li>
      </ul>
    </div>
  )
}

export default Carousel;
