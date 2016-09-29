import Vue from 'vue';
import UserBox from 'src/components/common/navigation/UserBox';

describe('UserBox.vue', () => {
  const vm = new Vue({
    template: '<div><user-box user-name="Foo Bar" user-initials="FB"></user-box></div>',
    components: {
      UserBox,
    },
  }).$mount();

  it('should render correct user name passed', () => {
    expect(vm.$el.querySelector('.user-name').textContent).to.contain('Foo Bar');
  });

  it('should render correct user initials passed', () => {
    expect(vm.$el.querySelector('.user-initials').textContent).to.contain('FB');
  });
});
