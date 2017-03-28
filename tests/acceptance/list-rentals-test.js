import { test, skip } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('should show rentals as the home page', (assert) => {
  visit('/');
  andThen(() => {
    assert.equal(currentURL(), '/rentals', 'should redirect automatically');
  });
});

test('should link to information about the company', (assert) => {
  visit('/');
  click('a:contains("About")');
  andThen(() => {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to contact information', (assert) => {
 visit('/');
  click('a:contains("Contact")');
  andThen(() => {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});

test('should list avalible rentals', (assert) => {
  visit('/');
  andThen( () => {
  assert.equal(find('.listing').length, 3, 'should equal 3 listings');
  });
});

skip('should filter the list of rentals by city', (assert) => {

});


skip('should show details for a selected rental', (assert) => {

});



