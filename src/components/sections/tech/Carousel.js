import { keyframes } from '@emotion/react';
import TECH from 'constants/tech';

const rotate360 = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-360deg);
  }
`;

const imgWidth = 220;
const imgHeight = 120;
const imgPadding = 0;

const panelWidth = imgWidth + 2 * imgPadding;
const panelHeight = imgHeight + 2 * imgPadding;

const TECH_KEYS = Object.keys(TECH);
const numOfPanels = TECH_KEYS.length;
const rotationDeg = (360 / numOfPanels);

/**
 * Tangent equation:
 * tangent(half of rotation deg) = opposite (panelWidth) / adjacent (radius)
 *
 *               ^
 *              /|\
 *             / |*\       <--  * = half of rotation deg
 *            /  |  \
 *           /   |   \
 *          /    |r   \
 *         /     |     \
 *        /      |      \
 *       /_______|_______\
 *                 [panelWidth/2]
 *      [                 ]
 *               ^
 *               |
 *    panel that shows tech icon
 *
 */
const radius = Math.round((panelWidth / 2) / Math.tan(Math.PI / numOfPanels));

const mobileImgWidth = 160;
const mobilePanelWidth = mobileImgWidth + 2 * imgPadding;
const mobileRadius = Math.round((mobilePanelWidth / 2) / Math.tan(Math.PI / numOfPanels));

function Carousel() {
  return (
    <div
      sx={{
        perspective: '1000',
        position: 'relative',
        width: `${panelWidth}rem`,
        height: `${panelHeight}rem`,
        transition: 'transform 1s',
      }}
    >
      <div sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
        animation: `${rotate360} 60s infinite forwards linear`,
      }}
      >
        {TECH_KEYS.map((key, index) => {
          const techConfig = TECH[key];

          return (
            <div
              key={techConfig.displayName}
              sx={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: [`${mobileImgWidth}rem`, `${mobileImgWidth}rem`, `${imgWidth}rem`],
                height: `${imgHeight}rem`,
                left: `${imgPadding}rem`,
                top: `${imgPadding}rem`,
                background: 'rgba(240, 240, 240,0.9)',
                transition: 'transform 1s',
                transform: [
                  `rotateY(${rotationDeg * index}deg) translateZ(${mobileRadius}rem)`,
                  `rotateY(${rotationDeg * index}deg) translateZ(${mobileRadius}rem)`,
                  `rotateY(${rotationDeg * index}deg) translateZ(${radius}rem)`,
                ],
              }}
            >
              {techConfig.imgElem}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
