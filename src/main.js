import BoardPresenter from './presenter/board-presenter.js';

const container = document.querySelector('.trip-events__list');

const boardPresenter = new BoardPresenter(container);

boardPresenter.init();
