import { useState } from 'react';

export const useForms = ( initialForm = {} ) => {

    const [formState, setformState] = useState( initialForm );

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setformState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }

}
