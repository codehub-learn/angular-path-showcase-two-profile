export class User {
  constructor(id: number, email: string, first_name: string, last_name: string, avatar: string) {
    this._id = id;
    this._email = email;
    this._first_name = first_name;
    this._last_name = last_name;
    this._avatar = avatar;
  }

  private _id: number;

  get id(): number {
    return this._id;
  }

  private _email: string;

  get email(): string {
    return this._email;
  }

  private _first_name: string;

  get first_name(): string {
    return this._first_name;
  }

  private _last_name: string;

  get last_name(): string {
    return this._last_name;
  }

  private _avatar: string;

  get avatar(): string {
    return this._avatar;
  }
}
