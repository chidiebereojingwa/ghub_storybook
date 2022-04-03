
import React from 'react'
import Input from './Input'
import './Input.css'

export default {
  title: 'form/Input',
  component: Input,
}

export const Small = () => <Input  size= 'small' placeholder='Small size'/>
export const Medium = () => <Input  size= 'medium' placeholder='medium size' />
export const Large = () => <Input  size= 'large' placeholder='large size' />
