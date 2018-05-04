(function ($, Drupal) {
    Drupal.behaviors.myModuleBehavior = {
      attach: function (context, settings) {
        $('input.myCustomBehavior', context).once('myCustomBehavior').each(function () {
          // Apply the myCustomBehaviour effect to the elements only once.
          $('h2').css('color','red');
        });
      }
    };
  })(jQuery, Drupal);
  