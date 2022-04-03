
import React from 'react'
import Input from './Input'
import './Input.css'

export default {
  title: 'Input',
  component: Input,
}

export const Small = () => <Input  variant= 'small' placeholder='Small size'/>
export const Medium = () => <Input  variant= 'medium' placeholder='medium size' />
export const Large = () => <Input  variant= 'large' placeholder='large size' />
