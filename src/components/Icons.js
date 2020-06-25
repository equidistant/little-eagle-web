import React, { memo } from 'react'
import styled from 'styled-components'

// export const Hamburger = {
//   mobile: memo(({ width, height}) => {
//     return (
//       <svg width="35" height="22" viewBox="0 0 35 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <line x1="1.48649" y1="1.48666" x2="33.5135" y2="1.48666" stroke="#FFD8C1" stroke-width="2.97297" stroke-linecap="round" stroke-linejoin="round"/>
//         <line x1="4.98649" y1="10.9998" x2="29.2357" y2="10.9998" stroke="#FFD8C1" stroke-width="2.97297" stroke-linecap="round" stroke-linejoin="round"/>
//         <line x1="1.48649" y1="20.5135" x2="33.5135" y2="20.5135" stroke="#FFD8C1" stroke-width="2.97297" stroke-linecap="round" stroke-linejoin="round"/>
//       </svg>
//     )
//   }),
//   web: memo(() => {
//     return (
//       <svg width='60' height='37' viewBox='0 0 60 37' fill='none' xmlns='http://www.w3.org/2000/svg'>
//         <line x1='2.5' y1='2.5' x2='57.5' y2='2.50001' stroke='#FFD8C1' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round'/>
//         <line x1='8.5' y1='18.5' x2='50.1667' y2='18.5' stroke='#FFD8C1' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round'/>
//         <line x1='2.5' y1='34.5' x2='57.5' y2='34.5' stroke='#FFD8C1' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round'/>
//       </svg>
//     )
//   })
// }


const HamburgerSvg = styled.svg`
  width: 60px;
  height: 37px;
  @media only screen and (max-width: 1024px) {
    width: 35px;
    height: 22px;
  }
`

export const HamburgerIcon = () => {
  return (
    <HamburgerSvg viewBox='0 0 60 37' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <line x1='2.5' y1='2.5' x2='57.5' y2='2.50001' stroke='#FFD8C1' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round'/>
      <line x1='8.5' y1='18.5' x2='50.1667' y2='18.5' stroke='#FFD8C1' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round'/>
      <line x1='2.5' y1='34.5' x2='57.5' y2='34.5' stroke='#FFD8C1' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round'/>
    </HamburgerSvg>
  )
}

const ArrowDownSvg = styled.svg`
  width: 79px;
  height: 34px;
  width: 60px;
  height: 37px;
  @media only screen and (max-width: 1280px) {
    width: calc(79px / 1.4);
    height: calc(34px / 1.4);
  }
  @media only screen and (max-width: 720px) {
    width: calc(79px / 1.8);
    height: calc(34px / 1.8);
  }
  @media only screen and (max-width: 400px), only screen and (max-height: 500px) {
    width: calc(79px / 2.2);
    height: calc(34px / 2.2);
  }
`

export const ArrowDownIcon = memo(() => {
  return (
    <ArrowDownSvg viewBox='0 0 79 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path fill='#FFFBF6' fillRule='evenodd' clipRule='evenodd' d='M77.308 3.77456C78.3854 2.91107 78.3854 1.51109 77.308 0.647611C76.2307 -0.21587 74.4839 -0.21587 73.4065 0.647611L39.058 28.1765L4.70961 0.647611C3.63222 -0.21587 1.88543 -0.21587 0.808041 0.647611C-0.269347 1.51109 -0.269347 2.91107 0.808041 3.77456L36.3203 32.2361C36.4547 32.5142 36.662 32.7749 36.942 32.9993C38.0194 33.8628 39.7662 33.8628 40.8436 32.9993L77.308 3.77456Z'/>
    </ArrowDownSvg>
  )
})

const FacebookLightSvg = styled.svg`
  width: 40px;
  height: 40px;
`

export const FacebookLightIcon = memo(() => {
  return (
    <FacebookLightSvg viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M30.0001 3.33334H25.0001C22.7899 3.33334 20.6703 4.21132 19.1075 5.77412C17.5447 7.33692 16.6667 9.45654 16.6667 11.6667V16.6667H11.6667V23.3333H16.6667V36.6667H23.3334V23.3333H28.3334L30.0001 16.6667H23.3334V11.6667C23.3334 11.2246 23.509 10.8007 23.8216 10.4882C24.1341 10.1756 24.5581 10 25.0001 10H30.0001V3.33334Z' stroke='#FFFBF7' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'/>
    </FacebookLightSvg>
  )
})

const InstagramLightSvg = styled.svg`
  width: 40px;
  height: 40px;
`

export const InstagramLightIcon = memo(() => {
  return (
    <InstagramLightSvg viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M28.3333 3.33334H11.6666C7.06421 3.33334 3.33325 7.0643 3.33325 11.6667V28.3333C3.33325 32.9357 7.06421 36.6667 11.6666 36.6667H28.3333C32.9356 36.6667 36.6666 32.9357 36.6666 28.3333V11.6667C36.6666 7.0643 32.9356 3.33334 28.3333 3.33334Z' stroke='#FFFBF7' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'/>
      <path d='M26.6667 18.95C26.8724 20.3371 26.6355 21.7537 25.9897 22.9983C25.3438 24.243 24.322 25.2523 23.0695 25.8828C21.8169 26.5132 20.3975 26.7326 19.0131 26.5099C17.6286 26.2871 16.3497 25.6335 15.3581 24.6419C14.3666 23.6504 13.713 22.3714 13.4902 20.987C13.2674 19.6026 13.4869 18.1831 14.1173 16.9306C14.7477 15.6781 15.7571 14.6562 17.0017 14.0104C18.2464 13.3646 19.663 13.1276 21.0501 13.3333C22.465 13.5431 23.7748 14.2024 24.7862 15.2138C25.7976 16.2252 26.4569 17.5351 26.6667 18.95Z' stroke='#FFFBF7' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round'/>
      <path d='M29.1667 10.8333H29.1834' stroke='#FFFBF7' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round'/>
    </InstagramLightSvg>
  )
})