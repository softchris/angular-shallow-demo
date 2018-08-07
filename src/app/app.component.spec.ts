import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { Shallow } from 'shallow-render/dist';
import { AppService } from './app.service';

describe('App Shallow', () => {
  let shallow: Shallow<AppComponent>;

  beforeEach(() => {
    shallow = new Shallow(AppComponent, AppModule)
      .mock(AppService, {getData: () => Promise.resolve({ title: 'mocked' })});
  });

  it('should find text', async () => {
    const {find} = await shallow.render(`<app-root></app-root>`);

    expect(find('.app').nativeElement.innerText).toBe('mocked');
  });

  it('should change desc', async () => {
    const comp = await shallow.render(`<app-root></app-root>`);
    const { find, element, fixture } = comp;
    const descEl = find('.description').nativeElement;

    expect(descEl.innerText).toBe('');
    const button = find('button').nativeElement;
    button.click();
    fixture.detectChanges();
    expect(descEl.innerText).toBe('clicked');
  });

  it('should render according to mocks', async () => {
    const comp = await shallow.render(`<app-root></app-root>`);
    const { find, element, fixture } = comp;
    const descEl = find('.description').nativeElement;

    expect(descEl.innerText).toBe('');
    const button = find('button').nativeElement;
    button.click();
    fixture.detectChanges();
    expect(descEl.innerText).toBe('clicked');
  });

  // mock services
});
