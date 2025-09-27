<?php
$dirs = array_filter(glob('*'), 'is_dir');

echo "<!DOCTYPE html><html><head><meta charset='UTF-8'><title>Meine Projekte</title></head><body>";
echo "<h1>Meine Projekte</h1><ul>";
foreach ($dirs as $dir) {
    echo "<li><a href='$dir/'>$dir</a></li>";
}
echo "</ul></body></html>";
?>
