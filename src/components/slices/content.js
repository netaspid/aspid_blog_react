import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  posts: [
    {
      id: '1',
      title: 'First post RATATATA!!! Allakh Akbar ahahaha',
      html: `Et ipsum est do aute ex
              commodo nulla qui ullamco fugiat ad velit eiusmod.
              Veniam nisi aliqua aliqua incididunt occaecat duis.
              Non aliqua consectetur occaecat
              aute commodo qui esse commodo sint.
              Fugiat laboris exercitation mollit dolore
              ipsum commodo dolore id pariatur
              incididunt pariatur irure veniam.
              Excepteur veniam laborum dolor esse eu enim id minim.
              Nulla enim sint enim consequat incididunt occaecat
              qui laborum pariatur sit sint.`,
      plaintext: `Et ipsum est do aute ex
              commodo nulla qui ullamco fugiat ad velit eiusmod.
              Veniam nisi aliqua aliqua incididunt occaecat duis.
              Non aliqua consectetur occaecat aute commodo qui
              esse commodo sint.
              Fugiat laboris exercitation mollit dolore
              ipsum commodo dolore id pariatur
              incididunt pariatur irure veniam.
              Excepteur veniam laborum dolor esse eu enim id minim.
              Nulla enim sint enim consequat incididunt occaecat
              qui laborum pariatur sit sint.`,
      created_at: '12.08.2021',
      created_by: 'netaspid',
      feature_image: 'background-1.png',
      status: '',
    },
    {
      id: '2',
      title: 'Top post 2',
      html: `Et ipsum est do aute ex
          commodo nulla qui ullamco fugiat ad velit eiusmod.
          Veniam nisi aliqua aliqua incididunt occaecat duis.
          Non aliqua consectetur occaecat aute commodo qui esse commodo sint.
          Fugiat laboris exercitation mollit dolore
          ipsum commodo dolore id pariatur
          incididunt pariatur irure veniam.
          Excepteur veniam laborum dolor esse eu enim id minim.
          Nulla enim sint enim consequat incididunt occaecat
          qui laborum pariatur sit sint.`,
      plaintext: `Et ipsum est do aute ex
        commodo nulla qui ullamco fugiat ad velit eiusmod.
        Veniam nisi aliqua aliqua incididunt occaecat duis.
        Non aliqua consectetur occaecat aute commodo qui esse commodo sint.
        Fugiat laboris exercitation mollit dolore
        ipsum commodo dolore id pariatur
        incididunt pariatur irure veniam.
        Excepteur veniam laborum dolor esse eu enim id minim.
        Nulla enim sint enim consequat incididunt occaecat
        qui laborum pariatur sit sint.`,
      created_at: '12.08.2021',
      created_by: 'netaspid',
      feature_image: 'background-1.png',
      status: '',
    },
    {
      id: '3',
      title: 'Row post 1',
      html: `Et ipsum est do aute ex
          commodo nulla qui ullamco fugiat ad velit eiusmod.
          Veniam nisi aliqua aliqua incididunt occaecat duis.
          Non aliqua consectetur occaecat aute commodo qui esse commodo sint.
          Fugiat laboris exercitation mollit dolore
          ipsum commodo dolore id pariatur
          incididunt pariatur irure veniam.
          Excepteur veniam laborum dolor esse eu enim id minim.
          Nulla enim sint enim consequat incididunt occaecat
          qui laborum pariatur sit sint.`,
      plaintext: `Et ipsum est do aute ex
        commodo nulla qui ullamco fugiat ad velit eiusmod.
        Veniam nisi aliqua aliqua incididunt occaecat duis.
        Non aliqua consectetur occaecat aute commodo qui esse commodo sint.
        Fugiat laboris exercitation mollit dolore
        ipsum commodo dolore id pariatur
        incididunt pariatur irure veniam.
        Excepteur veniam laborum dolor esse eu enim id minim.
        Nulla enim sint enim consequat incididunt occaecat
        qui laborum pariatur sit sint.`,
      created_at: '12.08.2021',
      created_by: 'netaspid',
      feature_image: 'background-1.png',
      status: '',
    },
    {
      id: '4',
      title: 'Row post 2',
      html: `Et ipsum est do aute ex
          commodo nulla qui ullamco fugiat ad velit eiusmod.
          Veniam nisi aliqua aliqua incididunt occaecat duis.
          Non aliqua consectetur occaecat aute commodo qui esse commodo sint.
          Fugiat laboris exercitation mollit dolore
          ipsum commodo dolore id pariatur
          incididunt pariatur irure veniam.
          Excepteur veniam laborum dolor esse eu enim id minim.
          Nulla enim sint enim consequat incididunt occaecat
          qui laborum pariatur sit sint.`,
      plaintext: `Et ipsum est do aute ex
        commodo nulla qui ullamco fugiat ad velit eiusmod.
        Veniam nisi aliqua aliqua incididunt occaecat duis.
        Non aliqua consectetur occaecat aute commodo qui esse commodo sint.
        Fugiat laboris exercitation mollit dolore
        ipsum commodo dolore id pariatur
        incididunt pariatur irure veniam.
        Excepteur veniam laborum dolor esse eu enim id minim.
        Nulla enim sint enim consequat incididunt occaecat
        qui laborum pariatur sit sint.!!!`,
      created_at: '12.08.2021',
      created_by: 'netaspid',
      feature_image: 'background-1.png',
      status: '',
    },
    {
      id: '5',
      title: 'Row post 3',
      html: `Et ipsum est do aute ex
          commodo nulla qui ullamco fugiat ad velit eiusmod.
          Veniam nisi aliqua aliqua incididunt occaecat duis.
          Non aliqua consectetur occaecat aute commodo qui esse commodo sint.
          Fugiat laboris exercitation mollit dolore
          ipsum commodo dolore id pariatur
          incididunt pariatur irure veniam.
          Excepteur veniam laborum dolor esse eu enim id minim.
          Nulla enim sint enim consequat incididunt occaecat
          qui laborum pariatur sit sint.`,
      plaintext: `Et ipsum est do aute ex
        commodo nulla qui ullamco fugiat ad velit eiusmod.
        Veniam nisi aliqua aliqua incididunt occaecat duis.
        Non aliqua consectetur occaecat aute commodo qui esse commodo sint.
        Fugiat laboris exercitation mollit dolore
        ipsum commodo dolore id pariatur
        incididunt pariatur irure veniam.
        Excepteur veniam laborum dolor esse eu enim id minim.
        Nulla enim sint enim consequat incididunt occaecat
        qui laborum pariatur sit sint.`,
      created_at: '12.08.2021',
      created_by: 'netaspid',
      feature_image: 'background-1.png',
      status: '',
    },
    {
      id: '6',
      title: 'Row post 4',
      html: `Et ipsum est do aute ex
          commodo nulla qui ullamco fugiat ad velit eiusmod.
          Veniam nisi aliqua aliqua incididunt occaecat duis.
          Non aliqua consectetur occaecat aute commodo qui esse commodo sint.
          Fugiat laboris exercitation mollit dolore
          ipsum commodo dolore id pariatur
          incididunt pariatur irure veniam.
          Excepteur veniam laborum dolor esse eu enim id minim.
          Nulla enim sint enim consequat incididunt occaecat
          qui laborum pariatur sit sint.`,
      plaintext: `Et ipsum est do aute ex
        commodo nulla qui ullamco fugiat ad velit eiusmod.
        Veniam nisi aliqua aliqua incididunt occaecat duis.
        Non aliqua consectetur occaecat aute commodo qui esse commodo sint.
        Fugiat laboris exercitation mollit dolore
        ipsum commodo dolore id pariatur
        incididunt pariatur irure veniam.
        Excepteur veniam laborum dolor esse eu enim id minim.
        Nulla enim sint enim consequat incididunt occaecat
        qui laborum pariatur sit sint.`,
      created_at: '12.08.2021',
      created_by: 'netaspid',
      feature_image: 'background-1.png',
      status: '',
    },
  ],
  menu: [
    {
      name: 'Портфолио',
      link: '#',
      icon: 'portfolio',
    },
    {
      name: 'Обо мне',
      link: '#',
      icon: 'profile',
    },
  ],
};
const slice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    getContent(state, action) {
      const {stateNew} = action.payload;
      state.state = stateNew;
    },
  },

});

export const {reducer} = slice;

export const increment = (value) => {
  (dispatch) => {
    dispatch(slice.actions.increment(value));
  };
};

export default slice;
