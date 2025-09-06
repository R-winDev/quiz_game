<?php

use Core\Response;

function dd(...$vars): void {
    // is it cli or web request?
    if (PHP_SAPI !== 'cli' && !headers_sent()) {
        header('Content-Type: text/html; charset=utf-8');
    }

    $isCli = PHP_SAPI === 'cli';

    $trace = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS, 1)[0] ?? null;
    $where = $trace ? ($trace['file'] . ':' . $trace['line']) : '';

    foreach ($vars as $v) {
        if ($isCli) {

            fwrite(STDERR, "\033[1;33m[dd @ {$where}]\033[0m" . PHP_EOL);

            print_r($v);
            fwrite(STDERR, PHP_EOL . str_repeat('-', 70) . PHP_EOL);
        } else {
            echo '<div style="background:#111;color:#eee;padding:12px;border-radius:10px;margin:10px 0;font:14px/1.5 monospace">';
            echo '<div style="color:#9cf;margin-bottom:8px">[dd @ ' . htmlspecialchars($where) . ']</div>';
            echo '<pre style="white-space:pre-wrap;word-break:break-word;margin:0">';
            echo htmlspecialchars(print_r($v, true), ENT_QUOTES, 'UTF-8');
            echo '</pre></div>';
        }
    }

    if (!headers_sent()) {
        http_response_code(500);
    }
    exit(1);
}

function abort($code = 404): void {
    http_response_code($code);
    require basePath("views/{$code}.views.php");
    die();
}

function isUri($value) {
    return $_SERVER['REQUEST_URI'] === $value;
}

function authorize($condition, $status = Response::FORBIDDEN) {
    if (!$condition) {
        abort($status);
    }
}

function basePath($path) {
    return BASE_PATH . $path;
}

function view($path, $vars = []) {
    extract($vars);

    require basePath('views/' . $path);
}

function redirect($path) {
    header("location: {$path}");
    exit();
}

function old($key, $default = '') {
    return \Core\Session::get('old')[$key] ?? $default;
}
