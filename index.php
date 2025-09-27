<?php
$dirs = array_filter(glob('*'), 'is_dir');

echo "<h1>Meine Projekte</h1><ul>";
foreach ($dirs as $dir) {
    echo "<li><a href='$dir/'>$dir</a></li>";
}
echo "</ul>";
?>