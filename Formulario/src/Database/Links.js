import React from 'react';
import Formularios from '../Compoent/Formularios';
import {db} from './Firebase'

const Links = () => {

    const addOrEditsLink = async (linkObject) => {
        await db.collection('links').doc().set(linkObject);
        console.log('nueva tarea agregada')
    }

    return <div>
        <Formularios addOrEditsLink={addOrEditsLink} />
    </div>
}

export default Links;



//la base de datos se exporta a index.js y se inicializa en App.js