import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IComponent } from "../../types/types"

interface componentsState {
    components: IComponent[];
    isLoading: boolean;
}

const initialState: componentsState = {
    components: [],
    isLoading: false
}

const componentsSlice = createSlice({
	name: 'components',
	initialState,
	reducers: {
		fetchComponents: (state) => {
           state.isLoading = true; 
        },
        fetchComponentsSuccess: (state, action: PayloadAction<IComponent[]>) => {
            state.isLoading = false;
            state.components = action.payload;
        },
        fetchComponentsFailure: (state) => {
            state.isLoading = false;
        }
	}
})

export default componentsSlice.reducer
export const {fetchComponents, fetchComponentsSuccess, fetchComponentsFailure} = componentsSlice.actions