import BoxView from './Element/BoxView'
import React from 'react'
import TextView from './Element/TextView'

function ElementComponentFactory(object) {
    switch (object.type) {
        case 'box':
            return <BoxView key={object.uuid} source={object}/>
        case 'text':
            return <TextView key={object.uuid} source={object}/>
    }
}

export default ElementComponentFactory
