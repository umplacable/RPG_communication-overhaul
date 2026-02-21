import { LancerCommunicator } from './communicator.js';

export function registerAPI() {
  const api = {
    openCommunicatorSettings: LancerCommunicator.openCommunicatorSettings.bind(LancerCommunicator),
    sendCommunicatorMessage: LancerCommunicator.sendCommunicatorMessage.bind(LancerCommunicator)
  };
  
  game.modules.get('rpg_communications-overhaul').api = api;
}