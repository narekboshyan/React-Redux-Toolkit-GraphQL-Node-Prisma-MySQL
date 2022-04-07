import useMediaQuery from '@material-ui/core/useMediaQuery'
import {
  TABLET_LAYOUT_WIDTH_BREAKPOINT,
  MOBILE_LAYOUT_CONTAINER_PADDING,
  DESKTOP_LAYOUT_WIDTH_BREAKPOINT,
  LAYOUT_MODE,
} from 'constants/layout'
import {
  LANDING_SCREEN_SECTION_SIDE_DESKTOP_PADDING_IN_PERCENT,
  LANDING_SCREEN_SECTION_SIDE_TABLET_PADDING_IN_PERCENT,
  LANDING_SCREEN_SECTION_SIDE_DESKTOP_PADDING_LARGE_IN_PERCENT,
  LANDING_SCREEN_SECTION_SIDE_TABLET_PADDING_LARGE_IN_PERCENT,
  LANDING_SCREEN_SECTION_SIDE_DESKTOP_PADDING_SMALL_IN_PERCENT,
  LANDING_SCREEN_SECTION_SIDE_TABLET_PADDING_SMALL_IN_PERCENT,
} from 'constants/landing/layout'

export const useLayout = ({ sidePaddingMore, sidePaddingLess } = {}) => {
  const applyDesktopLayout = useMediaQuery(`(min-width:${DESKTOP_LAYOUT_WIDTH_BREAKPOINT}px)`)
  const applyTabletLayout = useMediaQuery(`(min-width:${TABLET_LAYOUT_WIDTH_BREAKPOINT}px)`)
  let sidePadding = MOBILE_LAYOUT_CONTAINER_PADDING
  let mode = LAYOUT_MODE.mobile
  if (applyDesktopLayout) {
    let sidePaddingInPercent = LANDING_SCREEN_SECTION_SIDE_DESKTOP_PADDING_IN_PERCENT
    if (sidePaddingMore) {
      sidePaddingInPercent = LANDING_SCREEN_SECTION_SIDE_DESKTOP_PADDING_LARGE_IN_PERCENT
    } else if (sidePaddingLess) {
      sidePaddingInPercent = LANDING_SCREEN_SECTION_SIDE_DESKTOP_PADDING_SMALL_IN_PERCENT
    }
    sidePadding = `${sidePaddingInPercent}%`
    mode = LAYOUT_MODE.desktop
  } else if (applyTabletLayout) {
    let sidePaddingInPercent = LANDING_SCREEN_SECTION_SIDE_TABLET_PADDING_IN_PERCENT
    if (sidePaddingMore) {
      sidePaddingInPercent = LANDING_SCREEN_SECTION_SIDE_TABLET_PADDING_LARGE_IN_PERCENT
    } else if (sidePaddingLess) {
      sidePaddingInPercent = LANDING_SCREEN_SECTION_SIDE_TABLET_PADDING_SMALL_IN_PERCENT
    }
    sidePadding = `${sidePaddingInPercent}%`
    mode = LAYOUT_MODE.tablet
  }
  return {
    mode,
    sidePadding,
  }
}
