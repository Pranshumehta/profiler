/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// @flow
import { createSelector } from 'reselect';
import { getProfileViewOptions } from './profile';

import type { ThreadsKey, MarkerIndex, Selector } from 'firefox-profiler/types';

export type RightClickedMarkerInfo = {|
  +threadsKey: ThreadsKey,
  +markerIndex: MarkerIndex,
|};

export const getRightClickedMarkerInfo: Selector<RightClickedMarkerInfo | null> = createSelector(
  getProfileViewOptions,
  viewOptions => viewOptions.rightClickedMarker
);
