import { Injectable } from '@angular/core';

@Injectable()
export class VillainService {

  getVillain () {
    return [{"id":1,
            "name": "Magneto"}]
  }
}
