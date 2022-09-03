interface IVehicle {
  id: number;
  name: string;
  passengers: any;
  avg_consumption: number;
  fuel_type: number;
  fuel: IFuel;
}

interface IFuel {
  id: number;
  fuel_type: string;
  daily_usage: number;
  daily_usage_pt: number;
  import_cost: number;
}
