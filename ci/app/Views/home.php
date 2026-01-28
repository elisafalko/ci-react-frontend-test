<?= $this->extend('layout') ?>
<?= $this->section('content') ?>

<main class="container py-5">
    <h1 class="mb-4">Frontend Test Task</h1>
    <p class="text-muted">
        Data source: <code><?= esc($apiUrl) ?></code>
    </p>
    <div id="react-root"></div>
</main>

<?= $this->endSection() ?>
