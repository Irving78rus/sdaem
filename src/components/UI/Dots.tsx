import styled from 'styled-components';
interface Props {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  position?: string;
}
export const DotsStl = styled.div<Props>`
position: ${props => props.position || 'absolute'};  
width: 61px;
height: 61px;
top: ${props => props.top || ''};
left:  ${props => props.left || ''};
right:  ${props => props.right || ''};
bottom:  ${props => props.bottom || ''};
fill: black;
`

const Dots = (props: any) => {
  return <DotsStl {...props}>
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_2831_966)">
        <circle cx="6.5" cy="3.28906" r="2.5" fill={props.fill} />
      </g>
      <g filter="url(#filter1_d_2831_966)">
        <circle cx="6.5" cy="40.752" r="2.5" fill={props.fill} />
      </g>
      <g filter="url(#filter2_d_2831_966)">
        <circle cx="6.5" cy="22.0195" r="2.5" fill={props.fill} />
      </g>
      <g filter="url(#filter3_d_2831_966)">
        <circle cx="6.5" cy="59.4824" r="2.5" fill={props.fill} />
      </g>
      <g filter="url(#filter4_d_2831_966)">
        <circle cx="25.2312" cy="3.28906" r="2.5" fill={props.fill} />
      </g>
      <g filter="url(#filter5_d_2831_966)">
        <circle cx="25.2312" cy="40.752" r="2.5" fill={props.fill} />
      </g>
      <g filter="url(#filter6_d_2831_966)">
        <circle cx="25.2312" cy="22.0195" r="2.5" fill={props.fill} />
      </g>
      <g filter="url(#filter7_d_2831_966)">
        <circle cx="25.2312" cy="59.4824" r="2.5" fill={props.fill} />
      </g>
      <g filter="url(#filter8_d_2831_966)">
        <circle cx="43.9624" cy="3.28906" r="2.5" fill={props.fill} />
      </g>
      <g filter="url(#filter9_d_2831_966)">
        <circle cx="43.9624" cy="40.752" r="2.5" fill={props.fill} />
      </g>
      <g filter="url(#filter10_d_2831_966)">
        <circle cx="43.9624" cy="22.0195" r="2.5" fill={props.fill} />
      </g>
      <g filter="url(#filter11_d_2831_966)">
        <circle cx="43.9624" cy="59.4824" r="2.5" fill={props.fill} />
      </g>
      <g filter="url(#filter12_d_2831_966)">
        <circle cx="62.6936" cy="3.28906" r="2.5" fill={props.fill} />
      </g>
      <g filter="url(#filter13_d_2831_966)">
        <circle cx="62.6936" cy="40.752" r="2.5" fill={props.fill} />
      </g>
      <g filter="url(#filter14_d_2831_966)">
        <circle cx="62.6936" cy="22.0195" r="2.5" fill={props.fill} />
      </g>
      <g filter="url(#filter15_d_2831_966)">
        <circle cx="62.6936" cy="59.4824" r="2.5" fill={props.fill} />
      </g>
      <defs>
        <filter id="filter0_d_2831_966" x="0" y="0.789062" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_966" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_966" result="shape" />
        </filter>
        <filter id="filter1_d_2831_966" x="0" y="38.252" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_966" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_966" result="shape" />
        </filter>
        <filter id="filter2_d_2831_966" x="0" y="19.5195" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_966" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_966" result="shape" />
        </filter>
        <filter id="filter3_d_2831_966" x="0" y="56.9824" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_966" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_966" result="shape" />
        </filter>
        <filter id="filter4_d_2831_966" x="18.7312" y="0.789062" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_966" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_966" result="shape" />
        </filter>
        <filter id="filter5_d_2831_966" x="18.7312" y="38.252" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_966" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_966" result="shape" />
        </filter>
        <filter id="filter6_d_2831_966" x="18.7312" y="19.5195" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_966" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_966" result="shape" />
        </filter>
        <filter id="filter7_d_2831_966" x="18.7312" y="56.9824" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_966" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_966" result="shape" />
        </filter>
        <filter id="filter8_d_2831_966" x="37.4624" y="0.789062" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_966" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_966" result="shape" />
        </filter>
        <filter id="filter9_d_2831_966" x="37.4624" y="38.252" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_966" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_966" result="shape" />
        </filter>
        <filter id="filter10_d_2831_966" x="37.4624" y="19.5195" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_966" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_966" result="shape" />
        </filter>
        <filter id="filter11_d_2831_966" x="37.4624" y="56.9824" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_966" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_966" result="shape" />
        </filter>
        <filter id="filter12_d_2831_966" x="56.1936" y="0.789062" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_966" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_966" result="shape" />
        </filter>
        <filter id="filter13_d_2831_966" x="56.1936" y="38.252" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_966" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_966" result="shape" />
        </filter>
        <filter id="filter14_d_2831_966" x="56.1936" y="19.5195" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_966" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_966" result="shape" />
        </filter>
        <filter id="filter15_d_2831_966" x="56.1936" y="56.9824" width="13" height="13" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2831_966" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2831_966" result="shape" />
        </filter>
      </defs>
    </svg>
  </DotsStl>
};
export default Dots; 