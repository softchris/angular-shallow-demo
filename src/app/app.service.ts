import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  async getData() {
    const data = await new Promise((resolve) => {
      resolve({ title: 'data'});
    });

    return data;
  }
}
