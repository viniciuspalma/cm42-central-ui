import Vue from 'vue';
import NotificationTrigger from 'src/components/common/navigation/NotificationTrigger';

describe('NotificationTrigger.vue', () => {
  const vm = new Vue({
    template: '<div><notification-trigger></notification-trigger></div>',
    components: {
      NotificationTrigger,
    },
  }).$mount();

  it('should render correct notifications container', () => {
    expect(vm.$el.querySelectorAll('.notifications').length).to.eq(1);
  });

  it('should render correct icon text', () => {
    expect(vm.$el.querySelector('i').textContent).to.contain('notifications');
  });
});
