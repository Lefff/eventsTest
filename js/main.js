;(function( $ ) {
	$(function() {

		/**
		 * =================================
		 * === Инициализация multiscroll ===
		 * =================================
		 */
		$('.multiscroll').multiscroll({
			scrollingSpeed : 500,
			navigation     : true,
			verticalCentered : false,
			sectionsColor: ['#4F4F4F', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000']
		});



		/**
		 * ================================
		 * ===           Vars           ===
		 * ================================
		 */
		var leftSide  = $('.ms-left'),
			rightSide = $('.ms-right');



		/**
		 * =================================
		 * === Тест событий .on и .click ===
		 * =================================
		 */
		var btnMarkup = function( text, dataNum ) {
			var text    = text || 'DYNAMIC BUTTON',
				dataNum = dataNum || '';

			if( dataNum ) {
				dataNum = ' data-num="' + dataNum + '"';
			}

			return '<a class="awesome-button awesome-button_red" href="#" ' + dataNum + '>' + text + '</a>';
		};

		leftSide.find('.awesome-button')
				.click(function( e ) {
					var $this   = $( this ),
						copyNum = $this.data('num');

					e.preventDefault();

					copyNum++;

					$this
						.closest('.awesome-button-wrap')
						.append( btnMarkup( 'DYN BTN' + copyNum, copyNum ) );
				});

		rightSide.find('.awesome-button-wrap')
				.on('click', '.awesome-button', function( e ) {
					var $this   = $( this ),
						copyNum = $this.data('num');

					e.preventDefault();

					copyNum++;

					$this
						.closest('.awesome-button-wrap')
						.append( btnMarkup( 'DYN BTN' + copyNum, copyNum ) );
				});



		/**
		 * ==========================
		 * === События по нажатию ===
		 * ==========================
		 */
		var keyViewBox = $('.key-show'),
			keyInput   = $('.key-input-wrap');
		$( document ).on('keypress keydown', function( e ) {
			switch( e.keyCode ) {
				case 37:
					keyViewBox.text( e.type + ': ' + e.keyCode + ' - стрелка влево' );
					break;
				case 39:
					keyViewBox.text( e.type + ': ' + e.keyCode + ' - стрелка вправо' );
					break;

				default:
					keyViewBox.text( e.type + ': ' + e.keyCode );
					break;
			}

			if ( e.ctrlKey && e.keyCode == '67' ) {
				alert('Не копируй у меня!');
			}

			if( e.shiftKey && e.type == 'keypress' ) {
				keyInput.find('.key-input').text( String.fromCharCode(e.keyCode) );
			}
		});
	});
})( jQuery );