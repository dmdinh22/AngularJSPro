function ContactCard() {
    return {
        transclude: true, // templating things insidegit sat a template
        template: `
			<div>
				<h4>Contact</h4>
				<div ng-transclude></div>
			</div>
		`
    };
}

angular
    .module('app')
    .directive('contactCard', ContactCard);
