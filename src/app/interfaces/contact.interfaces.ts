export interface IContact{
  imageUrl: string;
  name: string;
}

export interface IDetail{
  imageUrl: string;
  name: string;
  title: string;
  hireDate: string;
  address: string;
  city: string;
  phone: string;
  child: string;
}

export interface IData{
  contacts: IContact[];
  details: IDetail[];

}

export interface IDataJSON {
  status: number;
  message: string;
  data: IData;
}
