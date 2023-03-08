/** ******************************************************************************
 *  (c) 2018 - 2023 Zondax AG
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 ******************************************************************************* */
import { ButtonKind, type IButton } from "./types";

export const dummyButton: IButton = {
  x: 0,
  y: 0,
  delay: 0,
};

const infoButton: IButton = {
  x: 375,
  y: 30,
  delay: 0.1,
};

const quitAppButton: IButton = {
  x: 0,
  y: 0,
  delay: 0.1,
};

export const tapContinueButton: IButton = {
  x: 200,
  y: 250,
  delay: 0.1,
};

const prevPageButton: IButton = {
  x: 35,
  y: 35,
  delay: 0.1,
};

const toggleOption1: IButton = {
  x: 350,
  y: 125,
  delay: 0.1,
};

const toggleOption2: IButton = {
  x: 350,
  y: 200,
  delay: 0.1,
};

const toggleOption3: IButton = {
  x: 350,
  y: 250,
  delay: 0.1,
};

const navRightButton: IButton = {
  x: 300,
  y: 625,
  delay: 0.1,
};

const navLeftButton: IButton = {
  x: 100,
  y: 625,
  delay: 0.1,
};

const approveTapButton: IButton = {
  x: 200,
  y: 550,
  delay: 0.1,
};

const approveHoldButton: IButton = {
  x: 335,
  y: 525,
  delay: 3,
};

const rejectButton: IButton = {
  x: 200,
  y: 650,
  delay: 0.1,
};

const confirmYesButton: IButton = {
  x: 200,
  y: 550,
  delay: 0.1,
};

const confirmNoButton: IButton = {
  x: 200,
  y: 650,
  delay: 0.1,
};

const showQRButton: IButton = {
  x: 200,
  y: 300,
  delay: 0.1,
};

const closeQRButton: IButton = {
  x: 200,
  y: 650,
  delay: 0.1,
};

export const TouchElements = new Map<ButtonKind, IButton>([
  [ButtonKind.InfoButton, infoButton],
  [ButtonKind.QuitAppButton, quitAppButton],

  [ButtonKind.TapContinueButton, tapContinueButton],

  [ButtonKind.PrevPageButton, prevPageButton],

  [ButtonKind.ToggleSettingButton1, toggleOption1],
  [ButtonKind.ToggleSettingButton2, toggleOption2],
  [ButtonKind.ToggleSettingButton3, toggleOption3],

  [ButtonKind.NavRightButton, navRightButton],
  [ButtonKind.NavLeftButton, navLeftButton],

  [ButtonKind.ApproveHoldButton, approveHoldButton],
  [ButtonKind.ApproveTapButton, approveTapButton],
  [ButtonKind.RejectButton, rejectButton],

  [ButtonKind.ConfirmYesButton, confirmYesButton],
  [ButtonKind.ConfirmNoButton, confirmNoButton],

  [ButtonKind.ShowQRButton, showQRButton],
  [ButtonKind.CloseQRButton, closeQRButton],
]);
