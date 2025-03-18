import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const root = (state: RootState) => state.components

export const selectAllComponents = createSelector(root, (root) => root.components)