function ContactCard() {
    return {
        transclude: {
            name: 'h1',
            desc: '?p' //optional with ?
        },
        template: `
			<div>
				<span ng-transclude="name"></span>
				<div ng-transclude="desc">No description</div>
			</div>
		`
    };
}

angular
    .module('app')
    .directive('contactCard', ContactCard);
