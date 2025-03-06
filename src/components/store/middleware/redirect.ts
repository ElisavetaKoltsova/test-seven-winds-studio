import { Middleware, PayloadAction } from "@reduxjs/toolkit";
import { rootReducer } from "../root-reducer";

type Reducer = ReturnType<typeof rootReducer>;

// export const redirect: Middleware<unknown, Reducer> =
//   () =>
//     (next) =>
//       (action: PayloadAction<string>) => {
//         return next(action);
//       };