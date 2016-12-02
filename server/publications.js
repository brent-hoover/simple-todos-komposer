import { Meteor } from 'meteor/meteor';
import { Tasks } from '/imports/api/tasks';

Meteor.publish('Tasks', function () {
    return Tasks.find();
});
