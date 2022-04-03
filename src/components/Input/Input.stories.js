
import React from 'react'
import Input from './Input'
import './Input.css'

export default {
  title: 'Input',
  component: Input,
}

export const Small = () => <Input className='small' seize= 'small' placeholder='Small size'/>
export const Medium = () => <Input seize= 'medium' placeholder='medium size' />
export const Large = () => <Input seize= 'large' placeholder='large size' />
