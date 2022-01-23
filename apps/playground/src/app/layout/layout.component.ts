import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'material-playground-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  expandedMode = true;
  autosize: boolean | undefined;

  isSmall$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.XSmall)
    .pipe(
      map(result => {
        this.expandedMode = false;
        return result.matches}),
      shareReplay()
    );

  isMedium$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Small)
    .pipe(
      map(
        result => {
          this.expandedMode = false;
          return result.matches}),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  toggleExpandedMode() {
    this.autosize = true;
    setTimeout(() => this.autosize = undefined, 500) // warning about autosize attribute here: https://material.angular.io/components/sidenav/api#MatDrawerContainer
    return this.expandedMode = !this.expandedMode;
  }

}
