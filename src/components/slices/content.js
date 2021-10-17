import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  content: [
    {
      type: 'posts',
      data: [
        {
          id: Date.now(),
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
      ],
    },
    {
      type: 'topPosts',
      data: [
        {
          id: Date.now(),
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
          id: Date.now(),
          title: 'Second post',
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
          feature_image: 'background-1.png',
          status: '',
        },
      ],
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
