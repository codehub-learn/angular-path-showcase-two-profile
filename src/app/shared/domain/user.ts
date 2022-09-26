export class User {
  private _id: number;
  private _email: string;
  private _first_name: string;
  private _last_name: string;
  private _avatar: string;

  constructor(id: number, email: string, first_name: string, last_name: string, avatar: string) {
    this._id = id;
    this._email = email;
    this._first_name = first_name;
    this._last_name = last_name;
    this._avatar = avatar;
  }

  get id(): number {
    return this._id;
  }

  get email(): string {
    return this._email;
  }

  get first_name(): string {
    return this._first_name;
  }

  get last_name(): string {
    return this._last_name;
  }

  get avatar(): string {
    return this._avatar;
  }
}
