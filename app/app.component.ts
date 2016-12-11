import { Component } from '@angular/core';

@Component({
  selector: 'wee-keep',
  template: `
<ngb-tabset>
  <ngb-tab title="HOME">
    <template ngbTabContent>
        <div>
            test
        </div>
    </template>
  </ngb-tab>
  <ngb-tab title="PEOPLE">
    <template ngbTabContent>
        <div>
test2
        </div>
    </template>
  </ngb-tab>
    <ngb-tab title="PLACE">
    <template ngbTabContent>
        <div>
test3
        </div>
    </template>
  </ngb-tab>
</ngb-tabset>
`,
})
export class AppComponent  { name = 'Angular'; }
