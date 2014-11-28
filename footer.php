<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package _s
 */
?>

</div><!-- #content -->

	<footer id="footer" class="site-footer container" role="contentinfo">
			<div class="site-info">
				<a href="<?php echo esc_url( __( 'http://wordpress.org/', '_s' ) ); ?>"><?php printf( __( 'Proudly powered by %s', '_s' ), 'WordPress' ); ?></a>
				<span class="sep"> | </span>
				<?php printf( __( 'Theme: %1$s by %2$s.', '_s' ), '_s', '<a href="http://automattic.com/" rel="designer">Automattic</a>' ); ?>
			</div><!-- .site-info -->
	</footer>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
