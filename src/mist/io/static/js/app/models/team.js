define('app/models/team', ['app/models/base', 'app/models/policy_rule'],
    //
    //  Team Model
    //
    //  @returns Class
    //
    function (BaseModel, PolicyRuleModel) {

        'use strict';

        return BaseModel.extend({
            id: null,
            name: null,

            //
            //  Methods
            //

            load: function () {
                var rules = this.get('policy.rules'), newRules = [];
                rules.forEach(function(rule) {
                    newRules.addObject(PolicyRuleModel.create(rule));
                });
                this.set('policy.rules', newRules);
            }.on('init'),
        });
    }
);
