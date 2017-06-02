import ElementComponent from '../ElementComponent'
import Section from '../Element/Section'
import React from 'react'

class Body extends ElementComponent {
    render() {
        const source = this.props.source
        const style = this.renderStyle(source.parameters.style)
        const children = this.renderKids(source.children)

        return <div id={source.uuid} style={style}>{children}</div>
    }

    renderKids (childArray = []) {
        return childArray.map((child) => <Section key={child.uuid} source={child}/>)
    }
}

export default Body
