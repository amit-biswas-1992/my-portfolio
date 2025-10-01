'use client'
import React from 'react'
export function Button({ children, variant, size, ...props }: any){
  const cls = 'px-3 py-1 rounded-md bg-brand text-white'
  return <button className={cls} {...props}>{children}</button>
}
