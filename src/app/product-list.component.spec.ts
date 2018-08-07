import { Shallow } from 'shallow-render/dist';
import { ProductListComponent } from './product-list.component';
import { AppModule } from './app.module';


describe('Product list Shallow', () => {
  let shallow: Shallow<ProductListComponent>;

  beforeEach(() => {
    shallow = new Shallow(ProductListComponent, AppModule);
  });

  it('should find text', async () => {
    const products = [{
      name: 'p1'
    },
    {
      name: 'p2'
    }];

    const {find} = await shallow.render(
      `<app-product-list (select)="click($event)" [products]="myProducts"></app-product-list>`,
      { bind: {
        myProducts: products,
        click: () => { console.log('selected'); }
        }
      }
    );

    expect(find('h2').nativeElement.innerText).toBe('Products');
  });

  it('should find product', async () => {
    const products = [{
      name: 'p1'
    },
    {
      name: 'p2'
    }];

    const {find} = await shallow.render(
      `<app-product-list (select)="click($event)" [products]="myProducts"></app-product-list>`,
      { bind: {
        myProducts: products,
        click: () => { console.log('selected'); }
        }
      }
    );

    expect(find('.product .title')[0].nativeElement.innerText).toBe('p1');
  });

  it('should find product after reassigning', async () => {
    const products = [{
      name: 'p1'
    },
    {
      name: 'p2'
    }];

    const {find, fixture, bindings } = await shallow.render(
      `<app-product-list (select)="click($event)" [products]="myProducts"></app-product-list>`,
      { bind: {
        myProducts: products,
        click: () => { console.log('selected'); }
        }
      }
    );

    expect(find('.product .title')[0].nativeElement.innerText).toBe('p1');
    bindings.myProducts = [{
      name: 'p3'
    }];

    fixture.detectChanges();
    expect(find('.product .title')[0].nativeElement.innerText).toBe('p3');

  });

  it('should call select', async () => {
    const products = [{
      name: 'p1'
    },
    {
      name: 'p2'
    }];

    const { find, bindings } = await shallow.render(
      `<app-product-list (select)="click($event)" [products]="myProducts"></app-product-list>`,
      { bind: {
        myProducts: products,
        click: () => { console.log('selected'); }
        }
      }
    );
    // find and invoke button
    const btn = find('button')[0].nativeElement;
    btn.click();

    expect(bindings.click).toHaveBeenCalled();
  });
});
