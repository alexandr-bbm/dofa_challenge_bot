import { Document } from 'mongoose';

interface previewChalObj {
  nameOfChallenge: string,
  conditions: string,
  durationOfChallenge: string | number,
  chat_id: number
}

type ID = string | number;

interface participant {
  id: number
  username: string
}

interface Ireport {
  date: number
  username: string | undefined
  message_id: number
  user_id: number
}

interface INewChallenge extends previewChalObj{
  dateOfStart: number
  dateOfEnd: number
  isCompleted: boolean
  hasStarted: boolean
  chat_id: number
  reports?: Array<Ireport>
  participants?: Array<participant>
}

interface IChallenge extends INewChallenge, Document {
}

export {
  previewChalObj, ID, IChallenge, INewChallenge,
  participant, Ireport,
};
