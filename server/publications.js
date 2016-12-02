import { Meteor } from 'meteor/meteor';
import { Links } from '/imports/api/tasks';

Meteor.publish('Tasks', function () {
    return Tasks.find();
});
