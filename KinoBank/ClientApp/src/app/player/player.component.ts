import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

declare var initializePlayer: any;

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: [ './player.component.css' ]
})
export class PlayerComponent implements OnInit, AfterViewInit {
    constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
        this.kinopoiskId = this.route.snapshot.paramMap.get('kinopoiskId') as unknown as number;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    
    ngAfterViewInit() {
        initializePlayer();
    }

     kinopoiskId!: number;
}
