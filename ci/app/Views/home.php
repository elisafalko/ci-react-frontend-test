<?= $this->extend('layout') ?>

<?= $this->section('content') ?>

<main class="container py-5">
    <h1 class="mb-4">Frontend Test Task</h1>
    <p class="text-muted">
        CodeIgniter base implementation.
    </p>
    <!-- React will be mounted here later -->
    <div id="react-root"></div>
</main>

<?= $this->endSection() ?>
