import {configureStore} from "@reduxjs/toolkit"
import appSlice from "./appSlice"
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer:{
        appSlice:appSlice,
        search:searchSlice,
    }
})

export default store;